

function showDate() {

    //年
    const year = new Date().getFullYear()
    for (let i = 0; i < this.year_num; i++) {
      this.year_list.unshift(year - i)
    }
    this.selected_year = this.list[this.list.length * 0.6]
    //月
    const month = new Date().getMonth();
    for (let i = -1; i < this.month_num; i++) {
      this.month_list.unshift(month - i)
    }
       this.selected_month = this.list2[this.list2.length * 0.6]
    //日
    const day = 31;
    for (let i = 0; i < this.day_num; i++) {
      this.day_list.unshift(day - i)
    }
      this.selected_day = this.list3[this.list3.length * 0.6]
  }
  export default { showDate };

