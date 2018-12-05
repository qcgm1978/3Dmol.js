const fetch = require('unfetch')
it('MMTF', () => {
    const uri = "https://mmtf.rcsb.org/v1.0/full/1MO8", request = 'GET', postdata = undefined
    // MMTF.fetch(
    //     "3PQR",
    //     // onLoad callback
    //     function (mmtfData) { console.log(mmtfData) },
    //     // onError callback
    //     function (error) { console.error(error) }
    // );
    fetch(uri, {
        credentials: 'include',
        url: uri,
        dataType: "binary",
        method: request,
        data: postdata,
        responseType: "arraybuffer",
        processData: false
    })
        .then(function (ret, txt, response) {
            debugger
            expect(true).toBeFalsy()
            done();
        }).catch(err => {
            debugger;
        })

})