interface IDeportament {
  devisionName: string;
  devisionCode: number;
  departamentName: string;
  departamentCode: number;
  employmentIndustry: string;
  nameOfDevisionDirector: string;
  nameOfDeportamentDirector: string;
  numberOfEmployees: number;
}

class Deportament implements IDeportament {
  public devisionName: string;
  public devisionCode: number;
  public departamentName: string;
  public departamentCode: number;
  public employmentIndustry: string;
  public nameOfDevisionDirector: string;
  public nameOfDeportamentDirector: string;
  public numberOfEmployees: number;

  constructor(deportament: IDeportament) {
    this.devisionName = deportament.devisionName;
    this.devisionCode = deportament.devisionCode;
    this.departamentName = deportament.departamentName;
    this.departamentCode = deportament.departamentCode;
    this.employmentIndustry = deportament.employmentIndustry;
    this.nameOfDevisionDirector = deportament.nameOfDevisionDirector;
    this.nameOfDeportamentDirector = deportament.nameOfDeportamentDirector;
    this.numberOfEmployees = deportament.numberOfEmployees;
  }
}

const inspectionDeportament = new Deportament({
  devisionName: "Bedek",
  departamentCode: 1500,
  departamentName: "Inspection",
  devisionCode: 1536,
  employmentIndustry: "Airplane structure inspection",
  nameOfDevisionDirector: "Melamed Avi",
  nameOfDeportamentDirector: "Vladimir Vasilev",
  numberOfEmployees: 8,
});

console.log(inspectionDeportament);
