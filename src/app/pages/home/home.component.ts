import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NavigationService } from '../../shared/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate(
          '0.5s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
    trigger('fadeInUp', [
      state('void', style({ opacity: 0, transform: 'translateY(50px)' })),
      transition(':enter', [
        animate(
          '0.8s ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  state = 'visible';
  selectedImage: string | null = null;
  constructor(private navigationService: NavigationService) {}
  services = [
    {
      title: 'Custom Websites',
      description:
        'Unique designs tailored for any business. We offer a wide range of services to help you create a website that is perfect for your business.',
    },
    {
      title: 'Custom Solutions',
      description:
        'One of a kind solutions for any niche, precision guaranteed.',
    },
    {
      title: 'Hosting',
      description:
        "100% up-time. We leverage Amazon's servers to guarantee your site or app never goes down.",
    },
  ];
  testimonials = [
    {
      quote:
        'We worked with Unycross to update our website to a more modern, mobile friendly platform. The communication with Luke was great and they did a wonderful job as they tailored it to our business needs. We love the results with a built-in registration system and the user friendly calendar. We would highly recommend Luke Vasilion and everyone at Unycross!',
      author: 'Martin Motocross Park',
    },
    {
      quote:
        'We are extremely pleased with the website Luke Vasilion designed for our company. His creative input and attention to detail were fantastic. He was able to produce a quality website for us in a reasonable amount of time, giving our website the professional look we wanted to achieve in order to stand out above other piano technicians in our area.',
      author: 'Kollar Piano Services',
    },
    {
      quote:
        'As a musician it is imperative to have a website that communicates your brand and who you are. Luke will help you hash out every aspect of your website and will unapologetically ask as many questions as he needs to to get to the bare bones of what your website is being built to do. There really was no detail left behind when they were building my website. Luke and his team were relentless in their pursuit of creating the most efficient website for me and my fans to navigate.',
      author: 'Rollin Brummette',
    },
    {
      quote:
        'Went to Lucas with a basic “feel” I wanted in a website. They helped flush out the visual layout and content. Unycross’s services are a bargain when you weigh the cost versus the product you receive. I will be using them again in future endeavors. Thanks again!',
      author: 'Diesel Fuel Doctor',
    },
    {
      quote:
        'Unycross excels at turning your website dreams into reality. We are so proud of the work they’ve done for us that we have already recommended them to many of our partners. The Unycross team is heads and shoulders above their competition, and we are very thankful that they call Michigan home.',
      author: 'Fresh Start Cleaning',
    },
  ];

  ngOnInit() {
    this.state = 'visible';
  }

  openModal(imageSrc: string) {
    this.selectedImage = imageSrc;
    document.body.style.overflow = 'hidden';
  }

  closeModal(event: Event) {
    if (
      event.target === event.currentTarget ||
      (event.target as HTMLElement).classList.contains('close-btn')
    ) {
      this.selectedImage = null;
      document.body.style.overflow = 'auto';
    }
  }

  navAndScroll() {
    this.navigationService.scrollToTop('/contact');
  }
}
