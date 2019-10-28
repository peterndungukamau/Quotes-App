export class Quote {
showMore: boolean;
constructor(
    public author: string,public quote: string,public  submitter: string,public more: string,public upvote: number,public downvote: number,public publishDate: Date)
{
   this.showMore=false;
}
 
 
}
