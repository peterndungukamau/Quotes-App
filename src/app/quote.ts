export class Quote {
showMore: boolean;
constructor(
    public author: string,public quote: string,public  submitter: string,public more: string)
{
   this.showMore=false;
}
 
 
}
