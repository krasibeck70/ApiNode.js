function inisilize() {
    $('#btn-submit').on('click',function () {
        //$('#form-demo').ajaxForm({url:'http://localhost:3000/api/ClientController', type:'post'});
        //$.post('http://localhost:3000/api/ClientController', $('#form-demo').serialize())
        var frm = $('#form-demo');

        frm.submit(function (e) {

            e.preventDefault();

            $.ajax({
                type: frm.attr('method'),
                url: 'http://localhost:3000/api/ClientController',
                data: frm.serialize(),
                success: function (data) {
                    console.log('Submission was successful.');
                    console.log(data);
                },
                error: function (data) {
                    console.log('An error occurred.');
                    console.log(data);
                },
            });
        });
    });
}

