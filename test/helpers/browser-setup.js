import jsdom from 'jsdom';
import 'ignore-styles';
import browserEnv from 'browser-env';

browserEnv();

jsdom.changeURL(window, 'https://dev.null');
