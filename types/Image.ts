export interface Image {
	_type: "image";
	_key?: string;
	asset: {
		_ref: string;
		_type: "reference";
	};
}
