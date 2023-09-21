<template>
  <div class="about">
    <v-container class="mt-10">
      <v-row>
        <v-col cols="12">
          <narbar-meun />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <h1 class="text-h2">About Page</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <p class="subtitle-1">First Name: {{ firstname }}</p>
          <p class="subtitle-1">Last Name: {{ lastname }}</p>
        </v-col>
      </v-row>
    </v-container>
    <v-btn color="success" @click="previewPdf">
      <v-icon dark class="custom-icon">mdi-printer</v-icon>
      <span class="custom-textf" @click="previewPdf">พิมพ์</span>
    </v-btn>
  </div>
</template>

<script>
import NarbarMeun from "../components/NarbarMeun";
import { exportTest } from "@/utils/pdf/test";
export default {
  name: "About",

  components: {
    NarbarMeun,
  },
  props: {
    firstname: String,
    lastname: String,
  },
  methods: {
    previewPdf() {
      exportTest();
    },
  },
};
</script>
