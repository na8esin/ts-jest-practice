// https://github.com/jsdom/jsdom/issues/1724
import 'whatwg-fetch';

process.on('unhandledRejection', (err) => {
  // ここでエラーを握りつぶす

  // 下記みたいにログを出力するとjestに怒られる
  // Cannot log after tests are done. Did you forget to wait for something async in your test?
  //console.log('hello');
});