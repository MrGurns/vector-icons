import { Font } from 'expo';
import createIconSetFromIcoMoon from './vendor/react-native-vector-icons/lib/create-icon-set-from-icomoon';

export default function(config, expoFontName, expoAssetId) {
  return createIconSetFromIcoMoon(config, Font.style(expoFontName).fontFamily, expoAssetId);
}
