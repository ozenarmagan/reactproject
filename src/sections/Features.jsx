import Card from "../components/Card"

const Features = () => {
  return (
    <section className="pt-4">
            <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                    
                    <Card title={"Özelleştirilmiş Baskı"} description={"Dilediğiniz görseli sizin için en canlı renklerle ürüne aktarıyoruz. Sevdiklerinize ve kendinize vereceğiniz en özel hediye."}/>
                    <Card title={"Özel Gün Tasarımları"} description={"Özel günler için hazır tasarımlarımıza göz atabilirsiniz. Özel tasarım için zamanım yok diyenler; sizi buraya alalım"}/>
                    <Card title={"Baskılı Kupa Bardaklar"} description={"Onlarca hazır tasarım arasından seçiminizi yapabilirsiniz."}/>
                    <Card title={"Baskılı Magnetler"} description={"Buzdolabınız artık sevdiğiniz görsellerle güzelleşecek."}/>
                    <Card title={"Bardak Altlıkları"} description={"İster çay ister kahve. Hazır tasarım ya da kişiselleştirilmiş ürünler arasından dilediğinizi seçin."}/>
                    <Card title={"Kitap Ayraçları"} description={"Sonuna yaklaştıkça heyecanı artan romanlar, hiç bitmesin istediğiniz o satırlar."}/>
                </div>
            </div>
        </section>
  )
}

export default Features
