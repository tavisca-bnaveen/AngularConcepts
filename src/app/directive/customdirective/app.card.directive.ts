import {Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
    selector: '[CardValue]'
  })
  export class CardDirective {
    // these will be resolved by the BrowserModule
    constructor(private ele: ElementRef, private renderer: Renderer2) {}

    @Input('CardValue')
    CardValue: string;


    applyblur(){
        console.log(this.ele.nativeElement);
        
        this.renderer.selectRootElement(this.ele.nativeElement).blur();
        let value=this.ele.nativeElement.value;
        var ans="";
        for(let i=0;i< value.length && i< 19;i++ ){
            if(i%5==4 && value[i]!='-' )
               ans+='-';
            else
            ans+=value[i];
            
        }
        this.ele.nativeElement.value=ans;
    }

    @HostListener('blur')
    blur(): void {
        console.log(this.ele.nativeElement);
        console.log("blur");
        
        this.renderer.selectRootElement(this.ele.nativeElement).blur();
        let value=this.ele.nativeElement.value;
        var ans="";let i=0;let mod=4;
        while(i< value.length && i< 19){
            if(i%mod==3){
                if(value[i+1]=='-'){
                    ans+=value[i]+value[i+1];
                    i++;
                    mod=5
                }
                else{
                    ans+=value[i]+'-';
                    mod=4;
                }
            }
            else{
                ans+=value[i];
            }
            i++;
        }
        
        this.ele.nativeElement.value=ans.substr(0,19);
    }
}