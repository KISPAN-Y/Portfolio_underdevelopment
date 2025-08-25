export const djangoTips = [
    {
        id: 1,
        title: "Master ViewSets and Routers",
        why: "They drastically reduce boilerplate code for standard CRUD operations.",
        how: "Instead of writing separate views for list, create, retrieve, update, and destroy, use a ModelViewSet. A Router then automatically generates your URL conf.",
        code: [`# views.py
from rest_framework import viewsets

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

# urls.py
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet

router = DefaultRouter()
router.register(r'articles', ArticleViewSet)

urlpatterns = router.urls
# This automatically creates:
# GET /articles/ (list)
# POST /articles/ (create)
# GET /articles/1/ (retrieve)
# PUT /articles/1/ (update)
# DELETE /articles/1/ (destroy)`]
    },
    {
        id: 2,
        title: "Use the get_queryset() Method for Dynamic Filtering and Security",
        why: "It centralizes the logic for determining which objects a user can access, making your views more secure and flexible.",
        how: "Override the get_queryset() method in your viewsets instead of defining a static queryset attribute.",
        code: [`class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        # Return only the current user's articles
        user = self.request.user
        if user.is_staff:
            return Article.objects.all()
        return Article.objects.filter(author=user)`]
    },
    {
        id: 3,
        title: "Leverage the Power of Serializer Method Fields",
        why: "To add custom read-only data to your serializers that isn't directly a model field.",
        how: "Use SerializerMethodField() to compute values on the fly.",
        code: [`class ArticleSerializer(serializers.ModelSerializer):
    is_published = serializers.BooleanField()
    read_time = serializers.SerializerMethodField() # Custom field

    class Meta:
        model = Article
        fields = ('title', 'body', 'is_published', 'read_time')

    def get_read_time(self, obj):
        # Calculate words per minute (assuming 200 wpm)
        word_count = len(obj.body.split())
        return max(1, word_count // 200)`]
    },
    {
        id: 4,
        title: "Optimize Database Queries with select_related and prefetch_related",
        why: "The N+1 query problem is a common performance killer in APIs. This prevents it.",
        how: "Annotate your querysets to eagerly load related data.",
        code: [`def get_queryset(self):
    # Use select_related for ForeignKey and OneToOne relationships
    # Use prefetch_related for ManyToMany and reverse relationships
    return Article.objects.all() \
        .select_related('author') \ # ForeignKey: fetches author profile in same query
        .prefetch_related('tags') \ # ManyToMany: fetches all tags in a second query
        .prefetch_related('comments__author') # Reverse FK with nested relation`]
    },
    {
        id: 5,
        title: "Keep Your Views Clean with Custom Permission Classes",
        why: "Reusable permission logic keeps your view code clean and makes security rules easy to test and maintain.",
        how: "Write a custom permission class by subclassing BasePermission.",
        code: [`# permissions.py
from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow authors of an object to edit it.
    """
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request (GET, HEAD, OPTIONS)
        if request.method in permissions.SAFE_METHODS:
            return True
        # Write permissions are only allowed to the author.
        return obj.author == request.user

# views.py
class ArticleViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsAuthorOrReadOnly]
    # ... other code ...`]
    },
    {
        id: 6,
        title: "Validate Incoming Data Efficiently with Serializer Validation",
        why: "Ensure data integrity at the API layer before it even hits your model's save() method.",
        how: "Use field-level validation (validate_<fieldname>) or object-level validation (validate).",
        code: [`class ArticleSerializer(serializers.ModelSerializer):
    # ... fields ...

    def validate_title(self, value):
        """Field-level validation: Check title length."""
        if len(value) < 10:
            raise serializers.ValidationError("Title must be at least 10 characters long.")
        return value

    def validate(self, data):
        """Object-level validation: Ensure published date is in the future if publishing."""
        if data.get('is_published') and data.get('publish_date') <= timezone.now():
            raise serializers.ValidationError("Publish date must be in the future.")
        return data`]
    },
    {
        id: 7,
        title: "Use the Browsable API and @action Decorator for Custom Endpoints",
        why: "The Browsable API is a fantastic tool for development and testing. The @action decorator lets you add non-standard endpoints to your ViewSets that appear there.",
        how: "Decorate a method in your ViewSet.",
        code: [`from rest_framework.decorators import action
from rest_framework.response import Response

class ArticleViewSet(viewsets.ModelViewSet):
    # ... standard CRUD code ...

    @action(detail=True, methods=['post'])
    def publish(self, request, pk=None):
        """A custom action to publish an article."""
        article = self.get_object()
        article.is_published = True
        article.save()
        serializer = self.get_serializer(article)
        return Response(serializer.data)

# This creates a new endpoint at: /articles/{id}/publish/`]
    },
    {
        id: 8,
        title: "Paginate for Performance and Usability",
        why: "Returning thousands of records in a single response is slow for your server and client. Pagination is essential.",
        how: "DRF makes it easy. Set a global default in settings.py and override per-view as needed.",
        code: [`# settings.py
REST_FRAMEWORK = {
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 20
}

# You can also use LimitOffsetPagination or CursorPagination (great for infinite scroll)
# in a specific view.
class ArticleViewSet(viewsets.ModelViewSet):
    pagination_class = LimitOffsetPagination`]
    },
    {
        id: 9,
        title: "Handle File and Image Uploads Efficiently",
        why: "Handling file uploads is common but different from JSON data.",
        how: "Use MultiPartParser and FormParser in your view and ensure your serializer handles files correctly.",
        code: [`# views.py
class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer
    parser_classes = [MultiPartParser, FormParser] # Add this to the standard JSON parser

# serializers.py
class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = '__all__' # Will include the FileField`]
    },
    {
        id: 10,
        title: "Don't Underestimate Generic Views and Mixins for Fine Control",
        why: "While ViewSets are great for full CRUD, sometimes you need a more specific view. DRF",
        how: "Compose your view from generics and mixins.",
        code: [`from rest_framework import generics, mixins

# An API endpoint that only allows creating and listing objects (no delete/update).
class ArticleListCreateView(mixins.ListModelMixin,
                           mixins.CreateModelMixin,
                           generics.GenericAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)`]
    }
]
