// LitElement: Base class for creating lit-WebComponent
// html: USed to define DOM for rendering base on properties aka DataPoints
// customElement: Decorator applied on LitElement class to define custom HTML Tag
// property: Used to define properties using which LitElement will communicate to parent
// css: Used to defin inline styles
import {LitElement, html, customElement, property, css} from 'lit-element';
// defining style object
const mystyle = css `
p {
  background-color: black;
  font-size: 20px;
}
`;

@customElement('simple-element')
export class SimpleElement extends LitElement {


  // declare a indexer that will define schema for properties
  [x: string]: any;

  // static method those returns
  // properties and css

  // listen for the changes explicitely
  static get properties() {
    return {
      records: {
        type: Array,
        hasChanged(newVal, oldVal) {
          console.log(`records propety changed oldvalue ${JSON.stringify(oldVal)}
            and newValue = ${JSON.stringify(newVal)}`);
          return newVal > oldVal;
        }
      }
    };
  }

  // static get properties(){
  //   return {
  //     fname: {type: String},
  //     lname: {type: String},
  //   };
  // }

  // static read-only property for styles



  // inline returning style
  // static get styles(){
  //   return css `
  //       div {background-color: red; color: yellow}
  //     `;
  // }

  // combining the style object with externaly defined variable
  // static get styles(){
  //   return [
  //     css `
  //       div {background-color: red; color: yellow}
  //     `, mystyle];
  // }


  // declaring property(ies)
  // property decorator will make the properties
  // exposed to parent so that parent can pass data to
  // LitElement
  @property({type: String}) inputMessage;
  @property({type: Array}) list;
  @property({type: Array}) newlist;
  @property({type: String}) val;
  // @property({type: Array}) records;
  @property({type: String}) dyummyProperty;


  // add a constructor
  constructor(){
    super();
    this.inputMessage = '';
    this.fname = 'Mahesh';
    this.lname = 'Sabnis';
    this.records = [{id:0, name:''}];
    this.dyummyProperty = '';
  }


  // set the dummyProperty value in a method
  // this method will be used by the parent using DOM aka document
  // object

  // when this method is called using DOM object
  // the requestUpdate() will be fired and can be detected
  // in render method
  setValue(v): void {
     console.log('Called Method with Something Dummy');
     console.log(`Value recieved ${JSON.stringify(v)}`);
     this.records = v;
     console.log(`Value recieved ${JSON.stringify(this.records)}`);

  }

  buttonClick(): void  {
    // bubble-up aka dispatch event to Angular COmponent
    const childEvent = new CustomEvent('child-click', {
       detail: {
         data: this.inputMessage.toUpperCase()
       },
       bubbles: true
    });
    // dispatch event and the parent has to subscribe to it
    this.dispatchEvent(childEvent);
  }

 firstUpdated(changedProps) {
    console.log(`The First Update ${changedProps.get('records')}`);
  }
  updated(changedProps) {
    console.log(`The Update Method ${changedProps.get('records')}`);
    this.updateComplete.then(() => {
      console.log(`In update complete ${JSON.stringify(this.records)}`);
    });
  }

  // return HTML Template by using lit-html
   render () {
     this.requestUpdate();
     if (this.records.length < 0) {
         return html `No Record Found`;
     } else {
     return html `<div>The Simple LitElement
        <div>
           <p>
            <strong>${this.val}</strong>
           </p>
           <strong>
             ${this.inputMessage.toUpperCase()}
           </strong>
        </div>
        <div>
          Full Name: ${this.fname} ${this.lname}
        </div>
        <p>
          <ul>
             ${this.list.map(v =>
                html `<li>${v}</li>`)
              }
          </ul>
        </p>
        <hr/>
        <p>
        <ul>
           ${this.newlist.map(v =>
              html `<li>${v}</li>`)
            }
        </ul>
      </p>
        <input type="button" value="click me" @click=${this.buttonClick}/>
        <hr/>
        <table>
        <thead>
          <tr>
            ${Object.keys(this.records[0]).map((col,i)=> html `<th>${col}</th>`)}
          </tr>
        </thead>
        <tbody>
           ${this.records.map((row,idx)=>
             html
             `<tr >${Object.keys(this.records[0]).map((col,i)=>
                 html `<td>${row[col]}</td>`)}
                 </tr>`)
             }
        </tbody>
      </table>
      </div>`;
    }
   }
}
