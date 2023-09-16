import {
  NavigationProp,
  ParamListBase,
  useNavigation as useNavigationBase,
} from '@react-navigation/native';

// Extend the RootParamList
declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParamListBase {}
  }
}

// Update the useNavigation function with the correct generic type constraint
export function useNavigation<
  T extends NavigationProp<ReactNavigation.RootParamList>,
>(): T {
  return useNavigationBase<T>();
}
