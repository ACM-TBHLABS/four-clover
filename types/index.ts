export interface Image {
  _type: "image";
  _key?: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface Product {
  _id: string;
  productName: string;
  productHeroImage: Image;
  productImages?: Image[];
  productDescription: string;
  productSKU: string;
  productCategory: "dental-aligners" | "chairs" | "implants" | "3d-scanners";
}
