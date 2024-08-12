Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/bionic64"

  config.vm.define "webserver" do |webserver|

    webserver.vm.network "private_network", ip: "192.168.33.10"

    webserver.vm.hostname = "webserver"
  end
end
