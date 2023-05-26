import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as XLSX from 'xlsx';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  preview: boolean = false;
  img: string = "";
  files: File[] = [];
  name: string = "";
  position: string = "";
  desc: string = "";
  uploading:boolean=false;
  constructor(private http: HttpClient, private afa: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.files.push(files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = () => {
        this.preview = true;
        this.img = reader.result as string;
      };
    }
  }

  onSubmit() {
    this.uploading=true;
    if (this.name == '') {
      this.uploading=false;
      alert('please enter name');
      return
    }
    if (this.files.length == 0) {
      this.uploading=false;
      alert('Please Choose an image');
      return
    }
    if (this.position == '') {
      this.uploading=false;
      alert('Please enter Position');
      return
    }
    if (this.desc == '') {
      this.uploading=false;
      alert('Please enter description');
      return
    }
    const formData = new FormData();
    formData.append('image', this.files[0], this.files[0].name);
    formData.append('name', this.name);
    formData.append('position', this.position);
    formData.append('desc', this.desc);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    this.http.post('http://moneysagaconsultancy.com/api/api/testimonials', formData)
      .subscribe((response:any) => {
        this.uploading=false;
        alert(response.message);
      });
  }
}
