// const $3Dmol = require('../3Dmol/3dmol');
// window.$ = { ajax: jest.genMockFunction() }

// const $ = require('jquery')
// const MMTF = require('mmtf-javascript')
const fetch = require('unfetch')
// describe('others', () => {
//     describe('new String()', () => {
it('MMTF', () => {
    expect(true).toBeTruthy()
    const uri = "https://mmtf.rcsb.org/v1.0/full/1MO8", request = 'GET', postdata = undefined
    // MMTF.fetch(
    //     "3PQR",
    //     // onLoad callback
    //     function (mmtfData) { console.log(mmtfData) },
    //     // onError callback
    //     function (error) { console.error(error) }
    // );
    fetch(uri, {
        url: uri,
        dataType: "binary",
        method: request,
        data: postdata,
        responseType: "arraybuffer",
        processData: false
    })
        .then(function (ret, txt, response) {
            debugger
            done();
        }).catch(err => {
            debugger;
        })

});
//     });
// })