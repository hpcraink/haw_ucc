import { uniPrefixes } from '../_helpers/uni_prefixes';
import { months } from '../_helpers/add_data';

interface UserData {
  userID: string,
  email: string,
  costs: number,
  pcts?: string
}

interface JsonData {
  haw: string,
  data: UserData[]
}

interface UniData {
  prefix: string,
  name: string,
  data?: UserData[]
}

interface MonthlyUniData {
  prefix: string,
  name: string,
  users: number
}

interface MonthlyData {
  month: number,
  data: JsonData[]
}

interface YearlyUniData {
  prefix: string,
  name: string,
  users: YearlyUsers[]
}

interface YearlyUsers {
  month: string,
  nr: number
}

export class DataObject  {

  constructor(
    //public data_obj: JsonData[]
    public dataObj: MonthlyData[]
  ) {}

  public uniDataObj(data_obj:JsonData[], prefix:string):JsonData {
    return data_obj.find ( (element:JsonData) => {
      return element.haw === prefix
    })
  }

  public uniData(data_obj:JsonData[], prefix:string):UserData[]{
    return this.uniDataObj(data_obj, prefix) ? this.uniDataObj(data_obj, prefix).data : undefined
  }

  public nrUsers(data_obj:JsonData[], prefix:string):number {
    return this.uniData(data_obj, prefix) ? this.uniData(data_obj, prefix).length : 0;
  }

  public uniTotalCosts(data_obj:JsonData[], prefix:string):number {
    let tcosts = 0;
    if (this.uniData(data_obj,prefix)) {
      this.uniData(data_obj, prefix).forEach((user_obj:UserData) => {
        tcosts += user_obj.costs
      })
    }
    return tcosts
  }

  public uniDataWithPct(data_obj:JsonData[],prefix:string):UserData[] {
    if (this.uniData(data_obj, prefix)) {
      const tcost:number = this.uniTotalCosts(data_obj, prefix);
      this.uniData(data_obj, prefix).forEach((user_obj:UserData) => {
        user_obj.pcts = (user_obj.costs * 100 / tcost).toFixed(4)
      })
    }
    return this.uniData(data_obj, prefix);
  }

  public getData(data_obj:JsonData[]):UniData[] {
    let allData:UniData[] = []
    uniPrefixes.forEach((prx_elem:UniData) => {
      if (this.uniDataWithPct(data_obj, prx_elem.prefix)) {
        prx_elem.data = this.uniDataWithPct(data_obj, prx_elem.prefix)
      }
      allData.push(prx_elem);
    })
    return allData
  }

  public tableData(data_obj:JsonData[]):MonthlyUniData[] {
    let generalData:MonthlyUniData[] = [];
    this.getData(data_obj).forEach((element:UniData) => {
      generalData.push({
        prefix: element.prefix,
        name: element.name,
        users: this.nrUsers(data_obj,element.prefix),
      })
    });
    return generalData;
  }

  public fullTableData(monthlyDataObject:any) {
    let yearlyData:YearlyUniData[] = [];
    monthlyDataObject.forEach((monthly_data:any) => {
      const month = monthly_data.month === -1 ? 'Total' : months[monthly_data.month]
      const users:number[] = []
      this.getData(monthly_data.data).forEach((uni_data:UniData) => {
        yearlyData.push({
        })
      })
      console.log(month)
    })
  }
}
