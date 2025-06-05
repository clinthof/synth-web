import { useDispatch, type TypedUseSelectorHook, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "../store";

export const useAppStore: () => AppStore = useStore;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;