from django.shortcuts import render
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.views.decorators.csrf import csrf_exempt

from places_api.models import Place
from places_api.serializer import PlaceSerializer

# Create your views here.
@csrf_exempt
@permission_classes([IsAuthenticated])
def get_places(request):
  headers = {
    "allow": "GET, OPTIONS"
  }

  if request.method == 'GET':
    places = Place.objects.all()
    places_serializer = PlaceSerializer(places, many=True)
    return JsonResponse({ 'response': 'OK', 'data': places_serializer.data }, safe=False, headers=headers, status=200)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, headers=headers, status=200)

  else:
    return JsonResponse({}, safe=False, headers=headers, status=405)


# @api_view(['POST', 'OPTIONS'])
@csrf_exempt
@permission_classes([IsAdminUser])
def create_place(request):
  headers = {
    "allow": "POST, OPTIONS"
  }

  if request.method == 'POST':
    places_data = JSONParser().parse(request)
    places_serializer = PlaceSerializer(data=places_data)

    if places_serializer.is_valid():
      places_serializer.save()
      return JsonResponse({ 'response': 'OK', 'message': 'Lugar agregado' }, safe=False, headers=headers, status=201)
    else: return JsonResponse({ 'response': 'ERROR', 'message': 'Error interno' }, safe=False, headers=headers, status=500)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, headers=headers, status=200)
  
  else:
    return JsonResponse({}, safe=False, headers=headers, status=405)


@csrf_exempt
@permission_classes([IsAdminUser])
def update_place(request):
  headers = {
    "allow": "PUT, OPTIONS"
  }

  if request.method == 'PUT':
    places_data = JSONParser().parse(request)
    place = Place.objects.get(id=places_data['id'])
    places_serializer = PlaceSerializer(place, data=places_data)

    if places_serializer.is_valid():
      places_serializer.save()
      return JsonResponse({ 'response': 'OK', 'message': 'Lugar modificado' }, safe=False, headers=headers, status=201)
    else: return JsonResponse({ 'response': 'ERROR', 'message': 'Error interno' }, safe=False, headers=headers, status=500)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, headers=headers, status=200)
  
  else:
    return JsonResponse({}, safe=False, headers=headers, status=405)


@csrf_exempt
@permission_classes([IsAdminUser])
def delete_place(request, id):
  headers = {
    "allow": "DELETE, OPTIONS"
  }

  if request.method == 'DELETE':
    place = Place.objects.get(id=id)
    place.delete()
    return JsonResponse({ 'response': 'OK', 'message': 'Lugar eliminado' }, safe=False, headers=headers, status=200)

  elif request.method == 'OPTIONS':
    return JsonResponse({}, safe=False, headers=headers, status=200)
  
  else:
    return JsonResponse({}, safe=False, headers=headers, status=405)
  
