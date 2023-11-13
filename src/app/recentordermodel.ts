// import { DateTime } from "@syncfusion/ej2-ng-charts"

import { DatePipe, Time } from "@angular/common"

export class Recentordermodel {
    id: number
    name: string
    product: string
    delivery_date:Date
    status: string
    tracking_no: string
    shipping: boolean
}
