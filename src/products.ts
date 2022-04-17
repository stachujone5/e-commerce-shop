import { brandInterface } from './components/shop/Shop'
export interface productInterface {
	id: number
	price: number
	description: string
	category: string
	brand: string
	shortBrand: brandInterface
	images: string[]
}

export const products: productInterface[] = [
	{
		id: 1,
		price: 159.0,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'OZELIA UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/baf500abb4634f99871540cb1c71c4e7/39fad2e3bcb6476a89244d1f8f561d20.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/ae5e91dd11494019b9520abfcccccc81/94dfeca1ea524900891217815c60485a.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/c419f278b97a47939a5248a31f9fd5bd/a67956c20465486ba63f4387b492c570.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/c1582f5e9d7641e183cb6f7682ee8757/b3945102fced4fb49c7a2225ce634cca.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/dc440c28ffdd4e65a994268ed96ca4bf/a5fe38502aa84876bd60cf8e0167f254.jpg?imwidth=1800',
		],
	},
	{
		id: 2,
		price: 149.99,
		category: 'man',
		brand: 'Nike Sportswear',
		shortBrand: 'Nike',
		description: 'AIR MAX ESSENTIAL - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f819a9e6f38843dcaeda3998dd9f869f/9413e2cc0cc244b18c6643a0ac06ae77.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/26a67ac7f5134bae96e5c98c81ac5478/2afa5d2fac4e41ffa76de485e0f2d081.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/8c13d4b05725456e93e2970a05271e7e/37e9152af6904083b188c0b6361e4da8.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/2fd4008e9d054f028afc3f5aed5980b2/8d16202079c54d2abeb1da94f99a1128.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/0780f4dbc7cd4fc4baf35f4baa904592/3de2d43623c74f1985a9a86ec086e9b9.jpg?imwidth=1800',
		],
	},
	{
		id: 3,
		price: 154.99,
		category: 'man',
		brand: 'Nike Sportswear',
		shortBrand: 'Nike',
		description: 'AIR MAX 95 UL J22 - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/ddfa1bc9b7924635886b27897e3915f1/a01dee194d0e4d03a772cf4f81dfffe3.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/2605b312527548b0be3817403b7333e7/96a543130ada40e8b7e64558473bd489.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/b7f96f68593f479ab7125d75b4a20ec3/e470a20732df4d8f85229059dbb524ad.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/bac79e1347ce4f43a109d3f6118206fb/f47b574dee534b7c8289de14d68d25e2.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/041e1bc9fa7c4491a1017527cdb0cae3/9e9b2803763848adaeb881d3143e5011.jpg?imwidth=1800',
		],
	},
	{
		id: 4,
		price: 89.99,
		category: 'man',
		brand: 'New Balance',
		shortBrand: 'New Balance',
		description: '574 - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f27f0effff473900b57bc24c746f1807/4061134ae9004a259980c4996ed9f92b.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/098b1988bb9a38979a5563ab9bda88be/5277b235e8bf4838b80a3f2368d5ff19.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/9c9f746137083190869618a8cfb0ba7c/24aef6e440aa4de8ad173d9ef725dc54.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/54950f77bbb231e39f85d27df096da36/f44d1b3274ac4cb3ba93feb11919249a.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/ca354114fcfa333dbe59786287fd093e/c4191dd297a740b68b3c61e0f01324e4.jpg?imwidth=1800',
		],
	},
	{
		id: 5,
		price: 109.95,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/0c483cb95a1f46df8da81d47f44f88f9/a6a28268836c479caecf15fe51a8fa00.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/485ae4000ede4a5f962f8ba05c9f6f7c/9025a1d775ff4a0499fb2fe9c726413f.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/7b9b7a75f9d545dba62a03a8804d2f8c/2b1784750cbd4b04843a1d7ee975b869.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/e64351bfbe7f44e88c1b13645966a759/16e1d2aec1d2483c81132d1d20cc54ef.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/1d4ea59dab814ce58dddd1229afc87af/76e37778a1e04ab39779d7eadf46c9cd.jpg?imwidth=1800',
		],
	},
	{
		id: 6,
		price: 89.99,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'ZX 700 HD - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/d7f35be129723dfe84cd679df8050726/6bbaea83ceec4284b9108035a40c8124.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/0dc5eac7231b36bcba3eb8ea64ada7c0/08a899a5948f44a4ac3217ce18c09d12.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/f92b75ba1ba937649867f7c92ff5037a/75d1d6e03a6b4768a93b79a2cce88cf6.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/9810d966193833a79177f52136fba9f9/201060b6dd654d3391c9b024fa2bee15.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/6506d1e14e2534eb91caed695c84836b/d849b052e80248ab9e89929e2b450c9e.jpg?imwidth=1800',
		],
	},
	{
		id: 7,
		price: 69.99,
		category: 'man',
		shortBrand: 'New Balance',
		brand: 'New Balance',
		description: 'GM500 - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/7816513dd44832fd971ed51ffb9bca96/7acf917aa82b482e888398e3d2ed2fd1.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/1477e627cbc03f7ab867f99c157434f4/5e1cc9ff1fb84c4f8edce1d69381beab.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/279efc58c27636e591f266e0f25b6258/d85335d312014bcb9dc622a33810261c.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/d0e7618c10b83e7f9934b8a13c891a84/c789ef0d683e4353917ba250107d4a96.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/c15230addb723e178254f6d26edd4233/8cb2cdb7b16349589189610a5273a634.jpg?imwidth=1800',
		],
	},
	{
		id: 8,
		price: 64.99,
		category: 'man',
		brand: 'New Balance',
		shortBrand: 'New Balance',
		description: '500 - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/78f48bcaf5934a9881bad5720cac9e4c/9593a822d81d424186d077b7e9afb313.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/c831c0195e5d44f1bffa6e5241997c35/a64794c5cd204d2cbd265a8f50e33374.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/488558f2a2914c3bb6ca0f75425a64d7/f90f887c5dd743a2bf955b038016799e.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/444421ebf9e54c1b9ac0cec505fc6f37/39a17abb339f4c27b91bfc724593d52b.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/5cb7f8f9c6d34f08bff2f8ce46a4d957/8c8ff72efa504c829ca4741fed2c2db3.jpg?imwidth=1800',
		],
	},
	{
		id: 9,
		price: 69.99,
		category: 'man',
		brand: 'New Balance',
		shortBrand: 'New Balance',
		description: 'CT 300 UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/1ca2c43534514211816987e9c5aa3f3b/7d1a28fd8a4848a6962068701176e033.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/b877b11c985d4ee38a0329ff4d676a21/5b4dbca69f9540b6a61934deac0fbc85.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/cbd05f2003c04ad79b5c046f07a1dbb7/279cd025c9434b3c83988753fa4f0906.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/deab1f238466425499583df5bcae3c88/a5a5203bb0c645928cffe96b3995fc06.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/a55c3c636ef64fd38e487a02ff6ca7f7/f945d472331d40edbb4d0af730a05fd6.jpg?imwidth=1800',
		],
	},
	{
		id: 10,
		price: 124.99,
		category: 'man',
		brand: 'Nike',
		shortBrand: 'Nike',
		description: 'AIR JORDAN 1 - High-top trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/989dcb97263c4aed8380fc927e3e97fb/cf78d7a468a04606aabc85fd4c9097a5.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/a9081a1ad7ec46e0b9ee77421540cc86/1e54a0a5b94048b1a7195058edaeeca9.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/602ff19b3efb40578a43c96c464138a1/308d2dd4eb96414d8335f171f5efdcfb.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/dd89465d473a4e1abb3f34d7f6dfba57/a9b1ea1077894b9f8d7a030d17b8908e.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/887f3e42c2fb43aa867c106b30a0f7fa/05e971d4589149f8b6acda00da44bcea.jpg?imwidth=1800',
		],
	},
	{
		id: 11,
		price: 150.0,
		category: 'man',
		brand: 'Nike',
		shortBrand: 'Nike',
		description: 'AIR VAPORMAX 2021 - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f402bd2ebd8b440387f327fc432d6242/9bd335282276462fa63a35afc53bbb23.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/6bb1e4eeefe34850adf73dd387c30f29/72522c1f3a4949bfbc2e51a37d71bea6.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/ef933faaf16b4b27adad02c3ea572bad/d3d189b5cdf34d3796c89517c3a127b7.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/5ee1de92028f46f6adda07bc0773f8ce/6fe69eae0afd4415b25d44f1c0cb5119.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/03c5e16df0ce48efa8714e3e6d30c539/10d423cf805b4c72a7bc709f46afe8f7.jpg?imwidth=1800',
		],
	},
	{
		id: 12,
		price: 69.99,
		category: 'man',
		brand: 'Vans',
		shortBrand: 'Vans',
		description: 'UA OLD SKOOL - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/b609cbddf5fd33e2b186fdac5e7ed0f2/823599cb71ee48cc99ab028f7123d3e0.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/5bf65a26c5a33ed2a983f4918f50e845/dbf3e9fa54ea494589686a2a5264d7ee.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/b32bf5a2adb83a09bcb609d0998ff01b/5637919995fd4c98a5dccc9f208347a7.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/f3a483997eae38d682b4031e8b108296/888d2df37a2249038338d695ce307be4.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/7651b56047243e1a9dc2b9855b940c01/051dbcb702cc4c488bb01853f90ba40c.jpg?imwidth=1800',
		],
	},
	{
		id: 13,
		price: 69.99,
		category: 'man',
		brand: 'Vans',
		shortBrand: 'Vans',
		description: 'OLD SKOOL UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/50845f0db11435aa9e405dc1dab37102/96d65ea5a6b640d1a5118931f15a7baf.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/17446b55e6ce3887928904ac90e68cea/30bac886f15149bc928b432fc62d1a7f.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/804519e5ae033b95900f2ae72bcb02e5/3eb2443b6afe449ab7112596d4d4577f.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/3d34f339a7f43bdd9d9c0236d98840f4/a4cf6cf7568d4670a450bded9dfb6474.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/39b4cdb48b0030a89bffb78753fd5e6f/c90c9b13cc1c4d3ebef5f01ec738dd22.jpg?imwidth=1800',
		],
	},
	{
		id: 14,
		price: 76.0,
		category: 'man',
		brand: 'Vans',
		shortBrand: 'Vans',
		description: 'SK8-HI UNISEX - High-top trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/c3801844838448fea72c69c9088e4ca6/33a30432f2fd474a9cc9aefe57b77463.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/b17203b890194fd4b9c18e17bb02892b/5219289b987244e1a0aa98a2fcdbb41a.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/b93893a121a84348a0d8c156fe2a9323/dbb46e34415c451ba0631694d600877c.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/764bf48982c048108add399621854234/c706fda3f7944dbf848cab0e83e55800.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/787a5ac6c73f40b592e073f98e603ab7/99f47964ac434aa7b8da542f6f208653.jpg?imwidth=1800',
		],
	},
	{
		id: 15,
		price: 79.99,
		category: 'man',
		brand: 'Vans',
		shortBrand: 'Vans',
		description: 'SK8-HI UNISEX - High-top trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/f90ce2d958bc45e3a49f01977c70634e/4ea2d03e1f4c4d6c92d13fb866b019fe.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/fe5771121f4e41bb8e1aa483675a7988/d168ecd752ab4f92979b67df9d0dd85c.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/8f99a64244c54fbd974b79ae1aa82759/88724486495b4fcd8687fd04648ad714.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/0d028aa11114402796aeb76a58093037/fc59de8a7b17455bac0561c39ecab52b.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/249a91a716db4a94b5f90d70da57d943/ef706a1af5014b6d8498b702d236d0e8.jpg?imwidth=1800',
		],
	},
	{
		id: 16,
		price: 45.0,
		category: 'man',
		brand: 'Vans',
		shortBrand: 'Vans',
		description: 'STYLE 36 DECON UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/ea7d991df5b9462388bef57c7a1174b6/d3f582305fae4332b289c28c1ead314a.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/ef44a53e5b254d468c4637d988330fe6/46ecc98eb5e84031ba2c228c1ac75010.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/e2ba05e7de834e808c122ba8f3e76867/9de8afcfcf5f402e896364ed704aa2d0.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/362879f549214b269158e9c3e3023079/0d8dd4666df54e33885f97c959b81af8.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/97b8ed7fb2eb4217a830f1cd52129ba6/f8acd0d480384b7b8cafe79f26a4496b.jpg?imwidth=1800',
		],
	},
	{
		id: 17,
		price: 89.95,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'OZWEEGO UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/0410a09b61804142b0f9a989541c2a2f/083a14a7ec3c404386a3eb669175184d.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/ea357804666441c38ae31e01337e0282/46f100248252497db56d9101aabe5361.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/dba033966a794183a8b893d07869a1d2/b07e47bb55dc4ed38f5e3d05fbfb04ec.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/d28f60ec194b4ff6aad5e528dda159a1/5b6cc7bb0b004c5c800e4a1138d5bd9f.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/dccc64e9f1db4e03883af5e5b83b0936/3572f4b73946467db01529259be9c742.jpg?imwidth=1800',
		],
	},
	{
		id: 18,
		price: 79.95,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'FORUM LOW UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/7e76bbd458d749f88c27ddf638d0ad3f/922222f99f524fbfab8b0dfc6c242df4.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/a6d968ad9e98488eb09567a364463394/f4face0ab6c840a5a67499996775f142.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/6b37453429d04043aab6d8897086bf15/1984978690454da9bb2b8ddacd7a0911.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/7d7cd312caef4d97a20ad6afb7fd32c5/d5e28ebe519d41369212f66b5f23c2aa.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/5faf4b91e4834f359a2f60bf7eac7c94/357a1b77118e4133b6453584d3c69a3a.jpg?imwidth=1800',
		],
	},
	{
		id: 19,
		price: 89.99,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/4c30987baea34d119aaa9c53eee0edc0/be0a85983d044e6f812d35ba066f4de2.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/5fe65277679b4b2381a8df2e56ce320b/a06b5007ffe145bbabdce35207ae7537.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/e4b012fc58b14a8db16994c952f25c61/9fc4bfe33644425a886646b08a0956b6.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/8b0985c367c9434db7f678fe8aa71791/6f1ad6d545684b07ac36fd61328a6fee.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/8dd305507a1c4a9a9ac35c42a9d413ed/552011b7ce24420d823687a21dead5cf.jpg?imwidth=1800',
		],
	},
	{
		id: 20,
		price: 129.99,
		category: 'man',
		brand: 'adidas Originals',
		shortBrand: 'Adidas',
		description: 'CONTINENTAL 80 STRIPES UNISEX - Trainers',
		images: [
			'https://img01.ztat.net/article/spp-media-p1/8e15593a559c43b9a6aa422efdbe5299/c0e4defce927437cb0d952a712d0f2a2.jpg?imwidth=1800&filter=packshot',
			'https://img01.ztat.net/article/spp-media-p1/f2617196249f42b4ad59c87d29d7cf4a/f93ba483c2fd4ad9846565bb29bcc633.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/f3cba2fde6d64bc285d2ae9b16ff8fe2/e6a7ee6a68874d519c4b3ab359e7543d.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/e364b58cf2c14fe1af14c0d16c14c6ac/6767ce27a7ff4b1eb6c36ad3cb03220b.jpg?imwidth=1800',
			'https://img01.ztat.net/article/spp-media-p1/dc4991fed9fb4ebcacaf6abf667a3322/1621f73b10434cbe93ccbc00d353583a.jpg?imwidth=1800',
		],
	},
]
