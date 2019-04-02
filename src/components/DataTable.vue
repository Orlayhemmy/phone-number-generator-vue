<template>
  <div>
    <div class="table-controls">
      <div class="sort-select">
        <p>Sort</p>
        <select class="sort" id="sort" @change="sortPhoneNumbers()">
          <option value="ascend">Ascending</option>
          <option value="descend">Descending</option>
        </select>
      </div>
      <button class="btn-generate" @click="generatePhoneNumbers()">
        Generate
      </button>
    </div>
    <div class="notify" v-if="message">{{message}}</div>
    <div :class="[tableClass]">
      <p v-show="!generatedNumbers.length" class="no-data">No numbers generated yet!</p>
      <div class="generated_numbers">
        <p
          v-for="(entry, index) in generatedNumbers"
          :key="`entry-${index}`"
          class="phone-number"
        >{{entry}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'DataTable',
  data() {
    return {
      generatedNumbers: [],
      message: '',
      min_max: false
    };
  },
  methods: {
    pushToArray(data) {
      this.generatedNumbers = [...this.generatedNumbers, data];
    },
    generatePhoneNumbers() {
      let i = 1;
      for (i = 1; i < 1000; i += 1) {
        const num = new Date();
        const randNum = JSON.stringify(num).slice(12, 24);
        const screenedNum = randNum.replace(/[^1-9]/g, '') * i;
        const diff = 9 - screenedNum.toString().length;
        if (diff < 0) {
          const trimNumber = screenedNum.toString().slice(0, 9);
          this.pushToArray(`0${trimNumber}`);
        } else if (diff > 0) {
          const extraDigits = screenedNum.toString().slice(0, diff);
          this.pushToArray(`0${screenedNum}${extraDigits}`);
        } else {
          this.pushToArray(`0${screenedNum}`);
        }
      }
      const uniqueNumbers = new Set(this.generatedNumbers);
      return this.saveGeneratedNumbers(uniqueNumbers);
    },
    sortPhoneNumbers(data = this.generatedNumbers, type = event.target.value) {
      switch (type) {
        case 'ascend':
          return this.generatedNumbers = Array.from(data).sort();
        case 'descend':
          return this.generatedNumbers = Array.from(data).reverse();
        case 'max':
          return this.generatedNumbers = Array.from(data).reverse()[0];
        case 'min':
          return this.generatedNumbers = Array.from(data).sort()[0];
      }
    },
    saveGeneratedNumbers(data) {
      this.sortPhoneNumbers(data, 'ascend');
      axios
        .post('http://localhost:7000/api/storeNumbers', this.generatedNumbers)
        .then((res) => {
          this.message = res.data.message;
        });
    },
  },
  computed: {
    tableClass() {
      return this.generatedNumbers.length ? 'table' : 'table table-no-data';
    },
  },
};
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort-select {
  display: flex;
  align-items: center;
}
.sort-select p {
  margin: 0 10px 0 0;
}
.btn-generate, .sort {
  background-color: #4bc295;
  color: #ffffff;
  height: 38px;
  border: none;
  border-radius: 3px;
  margin-left: auto;
  outline: none;
}
.sort {
  background: #ffffff;
  color: #2c3e50;
  border: 1px solid #ccc;
}
.table-controls {
  display: flex;
  margin-bottom: 20px;
}
button {
  font-weight: 700;
  font-size: 14px;
}
.notify {
  background: #008000;
  color: #ffffff;
  padding: 5px;
  font-weight: 600;
}
.table {
  background-color: #ffffff;
  border: 1px solid #cccccc59;
  align-items: center;
  min-height: 60vh;
  justify-content: center;
}
.table-no-data {
  display: flex;
}
.no-data {
  color: #2c3e508c;
  font-size: 42px;
}
.generated_numbers {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  font-weight: lighter;
  padding: 40px;
}
.phone-number {
  padding: 10px 0;
  font-size: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
