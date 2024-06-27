import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Chart, ChartComponent, registerables } from 'chart.js';
// import { Modal } from 'bootstrap';
Chart.register(...registerables)

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls:  ['./chart-dialog.component.css']
  })
export class ChartDialogComponent implements OnInit, AfterViewInit {

  @ViewChild('chart1') chart1!: ElementRef;
  @ViewChild('chart2') chart2!: ElementRef;
  @ViewChild('chart3') chart3!: ElementRef;
  @ViewChild('chart4') chart4!: ElementRef;
  @ViewChild('chart5') chart5!: ElementRef;


  constructor( private dailogRef : MatDialogRef<ChartDialogComponent>) {
  }
 ngOnInit(): void {
  }



  ngAfterViewInit(): void {
    this.renderChart(this.chart1.nativeElement, [24,25,26,27,28,29,30], [33,34,37,34,35,23,33], 'Chart 1', "Monday");
    this.renderChart(this.chart2.nativeElement, [24,25,26,27,28,29,30], [33,34,37,34,35,23,33], 'Chart 2' , "Tuesday");
    this.renderChart(this.chart3.nativeElement, [24,25,26,27,28,29,30], [32,33,35,33,32,23,33], 'Chart 3', "Wednesday");
    this.renderChart(this.chart4.nativeElement, [24,25,26,27,28,29,30], [33,34,37,34,35,23,33], 'Chart 4', "Thureday");
    this.renderChart(this.chart5.nativeElement, [24,25,26,27,28,29,30], [33,34,37,34,35,23,33], 'Chart 5', "Friday");
  }

  private renderChart(canvas: HTMLCanvasElement, labels: any[], data: any[], label: string, text_val : string ) {
    const chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
         
          label: label,
          data: data,
          borderColor: 'rgba(65, 145, 154, 2)',
          backgroundColor: 'rgba(34, 146, 192, 0.4)',
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
            display: true,
            text: text_val
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
  }
}




