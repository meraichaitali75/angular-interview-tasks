import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { TruncatePipe } from "../custom-pipe/TruncatePipe";

@Component({
    selector: 'app-pipes-component',
    standalone: true,
    imports: [CommonModule, TruncatePipe],
    template: `
    <h1>Pipe Formatting Chains</h1>

    <table>
        <tbody>
        <tr>
            <th>Transaction ID</th>
            <th>Process Date</th>
            <th>Final Amount</th>
        </tr>
        <tr>
            <td>{{transactionRecord.transactionId | uppercase}}</td>
            <td>{{transactionRecord.processedDate | date}}</td>
            <td>{{transactionRecord.rawAmount | currency:'CAD':'symbol'}}</td>
        </tr>
        </tbody>
    </table>

    <h1>Truncate Pipe</h1>

    <!-- TRUNCATE PIPE -->
    <p>{{ projectDescription | truncateCustomPipe:50 }}</p>
    `
})

export class PipesComponent {

    transactionRecord = { transactionId: 'tx-94827-ontario', processedDate: new Date(), rawAmount: 1450.75 }
    projectDescription = 'Mastering Angular standalone components and reactive architecture patterns on a Saturday afternoon.';
}