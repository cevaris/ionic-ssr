import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoSocialShareData, SeoSocialShareService } from 'ngx-seo';

@Component({
  selector: 'app-dynamic-seo',
  templateUrl: './dynamic-seo.page.html',
  styleUrls: ['./dynamic-seo.page.scss'],
})
export class DynamicSeoPage implements OnInit {
  pageId: string;

  constructor(
    private readonly seoSocialShareService: SeoSocialShareService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    this.pageId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    const seoData: SeoSocialShareData = {
      title: `Page Title - ${this.pageId}`,
      keywords: `keywords - ${this.pageId}`,
      description: `description - ${this.pageId} - description`,
      image: 'https://picsum.photos/id/1/200/300',
    };
    this.seoSocialShareService.setData(seoData);
  }
}
