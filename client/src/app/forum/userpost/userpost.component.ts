import { Component, OnInit } from '@angular/core';
import { InstitutionService } from '../../services/institution.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ForumServiceService } from '../../services/forum-service.service';


interface Poste {
  id: number;
  titre: string;
  content: string;
  image?: string;
  fichier?: string;
  createdAt: Date;
  appUserId?: string;
  comments: Comment[];
}
interface Comment {
  Titre:  string ;
 }
 
 

@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrl: './userpost.component.css'
})
export class UserpostComponent implements OnInit {
  
  queryParams: any;
  sortby!: string;
  query!: string;
  searchinput!: string;
  posts: any[] = [];
  userPosts: any[] = [];
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private readonly router: Router,
    private readonly forumservice: ForumServiceService
  ) {}

  ngOnInit(): void {
    this.loadUserPosts();
   
  }

  loadUserPosts() {
    this.forumservice.GetUserPosts().subscribe(
      (response) => {
        this.userPosts = response;
        console.log('User posts:', this.userPosts);
      },
      (error) => {
        console.error('Error fetching user posts:', error);
      }
    );
  }

  
  }

  // ... Autres méthodes existantes (search, onSortChange, onScroll) ...
