import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ChartDialogComponent } from '../chart-dialog/chart-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
// import { Modal } from 'bootstrap';
Chart.register(...registerables)

@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit, AfterViewInit {

  @ViewChild('chart1') chart1!: ElementRef;
  @ViewChild('chart2') chart2!: ElementRef;
  @ViewChild('chart3') chart3!: ElementRef;
  @ViewChild('chart4') chart4!: ElementRef;
  @ViewChild('chart5') chart5!: ElementRef;
  @ViewChild('chart6') chart6!: ElementRef;
  @ViewChild('chart7') chart7!: ElementRef; 
  xAxisData: number[] = [24,25,26,27,28,29,30]
  dataPoint: number[] = [33,34,37,34,35,23,33]



  constructor( private dialog: MatDialog, private http: HttpClient) {
     
  }
 ngOnInit(): void {
 
  }
 ngAfterViewInit(): void {
  // this.chartElements.forEach((chartElement, index) => {
  //   console.log(index)
  //   this.renderChart(chartElement.nativeElement, this.xAxisData, this.dataPoint, `Chart ${index + 1}`);
  // });

    this.renderChart(this.chart1.nativeElement, this.xAxisData, this.dataPoint, 'Chart 1');
    this.renderChart(this.chart2.nativeElement,this.xAxisData, this.dataPoint, 'Chart 2');
    this.renderChart(this.chart3.nativeElement, this.xAxisData, this.dataPoint, 'Chart 3');
    this.renderChart(this.chart4.nativeElement,this.xAxisData,  this.dataPoint, 'Chart 4');
    this.renderChart(this.chart5.nativeElement, this.xAxisData,  this.dataPoint, 'Chart 5');
    this.renderChart(this.chart6.nativeElement, this.xAxisData,  this.dataPoint, 'Chart 6');
    this.renderChart(this.chart7.nativeElement,this.xAxisData,  this.dataPoint, 'Chart 7');
  }

  private renderChart(canvas: HTMLCanvasElement, labels: any[], data: any[], label: string) {
    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: label,
          data: data,
          borderColor: 'rgba(0, 255, 0)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label || '';
                if (context.parsed.y !== null) {
                  return `${label}: ${context.parsed.y}`;
                }
                return '';
              }
            }
          },
          title: {
            display: false,
             color: 'rgba(255, 255, 255, 1)'
          },
          legend: {
            labels: {
                color: 'rgba(255, 255, 255, 1)' // Legend text color
            }
        }
        },
        scales: {
          y: {
            stacked: true,
            display : false
          },
          x: {
            grid: {
              display: false // Hide the x-axis grid lines
            }
          }
        }
      },
  })

  canvas.addEventListener('click', (event) => {
    this.openDialog();
  });

}
openDialog(): void {
  const dialogRef = this.dialog.open(ChartDialogComponent, {
    width: '300px',
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed', result);
    // handle dialog close actions if needed
  });
}

}


