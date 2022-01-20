import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    console.log(name)
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}