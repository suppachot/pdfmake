<template>
  <div>
    <v-form>
      <v-container class="mt-10">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="firstname"
              label="First Name"
              outlined
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastname"
              label="Last Name"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "FromInputName",
  data() {
    return {
      firstname: "",
      lastname: "",
    };
  },

};
</script>
