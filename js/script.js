
var qrcodeAddress = new QRCode(document.getElementById("qrcodeAddress"),{width: 120,height: 120});
var qrcodeSecret = new QRCode(document.getElementById("qrcodeSecret"),{width: 120, height: 120});

generate();

      function generate(){
        var wallet = generateWallet();

        document.getElementById('qraddr').innerHTML = '';
        document.getElementById('qrsecr').innerHTML = '';

        var qraddr = new QRCode("qraddr");
        qraddr.makeCode(wallet["address"]);
        document.getElementById('addrtext').innerHTML = wallet['address'];

        var qrsecr = new QRCode("qrsecr");
        qrsecr.makeCode(wallet["secret"]);
        document.getElementById('secrtext').innerHTML = wallet['secret'];
      }

   



