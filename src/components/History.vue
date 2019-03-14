<template>
  <div class="table">
    <div v-if="err" class="table-no-data err">{{err}}</div>
    <div v-if="!err">
      <div v-for="(key, value, index) in generatedNum" :key="`entry-${index}`" class="day">
        <p class="day-list">{{value}}</p>
        <div v-for="(entry, index) in key" :key="`entry-${index}`" class="time">
          <p class="time-list">{{entry.gen_time}}</p>
          <div class="number-list">
            <p v-for="(data, index) in entry.data" :key="`data-${index}`" class="num">{{data}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as axios from 'axios';

export default {
  name: 'History',
  data() {
    return {
      generatedNum: {},
      err: '',
    };
  },
  created() {
    axios
      .get('http://localhost:7000/api/generatedNumbers')
      .then((res) => {
        this.generatedNum = res.data.data;
      })
      .catch((err) => {
        this.err = err.message;
      });
  },
};
</script>
<style>
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
.err {
  color: #2c3e508c;
  font-size: 42px;
}
.day {
  padding: 10px;
  text-align: left;
  margin: 10px;
  border-radius: 5px;
  font-weight: 500;
}
.day:nth-child(even) {
  background: #cccccc7d;
}
.day:nth-child(odd) {
  background: #546e857a;
}
.day-list {
  font-size: 20px;
}
.time-list {
  padding: 10px 0;
}
.number-list {
  padding: 50px;
  background: white;
  display: grid;
  text-align: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
.num {
  font-size: 18px;
  padding: 10px;
  font-weight: 400;
}
</style>
