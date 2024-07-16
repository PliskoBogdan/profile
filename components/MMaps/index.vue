<template>
    <GoogleMap
      :api-key="apiKey"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </template>
  
  <script>
  import { GoogleMap, Marker } from "vue3-google-map";
  
  export default {
    name: "App",
    components: { GoogleMap, Marker },
    setup() {
      const config = useRuntimeConfig()
      const apiKey = config.googleMapsApiKey || config.public.googleMapsApiKey

      const center = { lat: 50.005033, lng: 36.232471 };

      console.log('sdsdasdsa', config);

      return { center, apiKey };
    },
  };
  </script>