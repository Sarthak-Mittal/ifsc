import { Component, OnInit } from '@angular/core';
import { Contributors } from 'src/app/model/contributors';
import { GithubService } from 'src/app/services/github.service';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  contributors : Contributors;
  faCodeBranch = faCodeBranch;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getContributors().subscribe(
      (data: Contributors) => {
        this.contributors = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
