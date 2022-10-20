// Exports ion range slider callback event in globally accessible manner
import { IonRangeSliderEvent } from "ion-rangeslider";
export type EventCallback = (obj: IonRangeSliderEvent) => void;
export as namespace IonRangeSlider;