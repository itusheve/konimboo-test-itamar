<template>
  <div>
       <router-link :to="{name:'catalog'}">Back to Catalog</router-link>
      <v-form
           ref="form"
      @submit.prevent="submit">
      <v-container fluid>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.name"
              color="purple darken-2"
              label="Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.phone"
              color="purple darken-2"
              label="Phone number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
            <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              v-model="form.email"
              color="purple darken-2"
              label="Email"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
             <v-col
            cols="12"
            sm="6"
          >
             <v-btn
         
          text
          color="primary"
          type="submit"
        >
          Register
        </v-btn>
             </v-col>
        </v-row>
         </v-container>
      </v-form>
     
  </div>
</template>

<script>
import {SendFormData} from '../dataAdapter';
export default {
    name:'Buy',
    data(){
        return {
            form:{name:'',phone:'',email:'',productTitle:''}
        }
    },
    created(){
        this.form.productTitle = this.$route.params.title;
    },
    methods:{
        submit(){
            SendFormData(this.form).then(item =>{
                console.log(item);
                    alert('sucess');
                    this.form.name='';
                    this.form.phone='';
                    this.form.email='';
            })
            .catch((err) =>console.log(err));
        }
    }
}
</script>

<style>

</style>