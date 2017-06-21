	var app = angular.module('myApp', ['ngRoute', 'pascalprecht.translate']);

	// configure our routes
	app.config(function($routeProvider) {
		$routeProvider
			.when('/home', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			})
			.when('/services', {
				templateUrl : 'pages/services.html',
				controller  : 'servicesController'
			})
			.otherwise({
			redirectTo: '/home'
			});
	});

	
	// This is for the multilang site
app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    btn_lang_en: 'Français',
    home: 'Home',
	services: 'Services',
	contact: 'Contact',
	close: 'Close',
	
	home_header: 'L’entreprise Provy Réparation souhaite et s’engage à satisfaire chaque client et de leur apporter une expérience inégalée. L’entreprise s’engage à réparer , à optimiser ou à installer des logiciels sur l’ordinateur du client de façons propres, organiser et sécuritaire. Nous voulons offrir un prix plus qu’abordable pour le client et de lui fournir un rapport complet avec recommandations et travaux accomplis par notre technicien.',
	home_para1: 'Un ordinateur est une machine électronique qui fonctionne par la lecture séquentielle d\'un ensemble d\'instructions, organisées en programmes, qui lui font exécuter des opérations logiques et arithmétiques sur des chiffres binaires.',
	home_para2: 'Le premier "ordinateur" est apparu dans les environs de 1834 à 1837 et conçus par Charles Baddage. L\'ordinateur fonctionnait grâce à l\'aide d\'instructions sur des cartes perforées.',
	home_para3: 'Le premier "ordinateur personnel" est apparu dans les années 1960. Ce fut le tout début d\'une nouvelle ère pour le monde de l\'informatique et de l\'industrialisation.Le monde ne cesse de changer et d\'évoluer depuis que les ordinateurs personnels existent et c\'est ce qui vous amène aujourd\'hui sur notre site Internet.',
	home_para4: 'Une des principales raisons pour lesquelles vous êtes sur notre site, les "bugs". Votre ordinateur est lent en raison de bogues causés par sois des virus ou le manque d\'entretient de votre ordinateur. Mais pourquoi cela se nomme-t-il un "bug"? ',
	home_para5: 'En informatique, un "bug" (de l\'anglais bug. « insecte ») est un défaut de conception d\'un programme informatique causé par un insecte lors du développement du système Harvard Mark II3. L\'insecte se retrouvait dans les circuits électriques de l\'ordinateur géant.',
	home_para6: 'Les bogues se retrouvant dans les ordinateurs d\'aujourd’hui sont en grande cause du ralentissement de l\'ordinateur et peuvent être réglés grâce à un grand nettoyage de l\'ordinateur à l\'aide d\'outils spécial.',
	home_img_1: 'Nos services',
	home_img_1_1: 'En savoir plus sur ce que nous offrons',
	home_img_1_2: 'Services',
	home_img_2: 'Contactez-nous',
	home_img_2_1: 'Comment nous rejoindre',
	home_img_2_2: 'Contact',
	
	about_header: 'À propos de Provy Réparation',
	about_para1: 'Provy Réparation a été fondé en 2013 par Yannick Provencher. Celui-ci diplômé en programmation informatique détient l\'expérience nécessaire pour assurer un travail de qualité a tous les clients de Provy Réparation. L\'informatique lui a toujours été une passion depuis son enfance et s\'assure de transmettre son savoir a tous ses clients.',
	about_para2: 'Nous nous démarquons par notre dévouement à la satisfaction du client et a l’importance que nous apportons au travail de qualité. Nous ferons tout en notre pouvoir pour que le client n’hésite pas à recontacter Provy Réparation. La compétition ne nous inquiète aucunement puisque nous nous adaptons à tout changement afin de battre la concurrence',
	
	media_header: 'Résaux sociaux',
	media: 'Nous faisons des concours sur facebook alors assurez-vous de nous suivre!',
	
	services_header: 'Services offerts',
	services_para_1: 'Diagnostic matériel – Gratuit',
	services_para_1_1: 'Taux horraire du technicien – 30$',
	services_para_2: 'Augmentation de performance – 30$',
	services_para_3: 'Frais de déplacement – 40$',
	services_para_4: 'Installation diverse',
	services_para_4_1: 'Désinstallation et installation de logiciels - 10$ chaque',
	services_para_4_3: 'Installation de carte mère – 30$',
	services_para_4_4: 'Installation de carte vidéo, disque dur, mémoire vive (RAM), lecteur CD/DVD, boite d\'alimentation - 10$',
	services_para_4_5: 'Transfert de l\'ordinateur complet dans un autre boîtier – 50$',
	services_para_4_6: 'Installation de processeur (nettoyage, ajout de pâte thermique) – 20$',
	services_para_4_7: 'Formatage de disque dur – 10$',
	services_para_4_8: 'Partition sur disque dur – 10$',
	services_para_5: 'Nettoyage physique de l’ordinateur – 15 $ à 45$',
	services_para_6: ' Installation de Windows',
	services_para_6_1: 'Installation de Windows et drivers pour ordinateur de bureau – 35$',
	services_para_6_2: 'Installation de Windows et drivers pour portables – 40$',
	services_para_6_3: 'Mise à jour de Windows – 15$',
	services_para_6_4: 'Installation de pilote – 10$ par pilote',
	services_para_6_5: 'Transfert de données - sur CD 40$ / sur DVD 60$',
	services_para_6_6: 'Test de vérification pour tentative de récupération de données – 20$',
	services_para_7: 'Taux horaire à domicile ou entreprise – 40$',
	services_para_8: 'Général',
	service_prix: 'Les prix peuvent varier, il est recommendé de nous rejoindre',
	
	contact_header: 'Coordonnées',
	contact_1: 'Pour obtenir une estimation ou pour obtenir nos services, S.V.P. contactez nous au:',
	contact_2: '(819) 319-5494 ou par courriel ',
	contact_3: 'provyrepartion@gmail.com',
	contact_5: 'Si vous communiquez par courriel s\'il vous plaît fournir les informations suivantes :',
	contact_6: 'Nom complet',
	contact_7: 'Numéro de téléphone',
	contact_8: 'Ordinateur ou ordinateur portale',
	contact_9: 'Services voulu',
	contact_13: 'Sélectionnez les services que vous aimeriez avoir et ensuite copiez et collez dans votre message électronique.',
	contact_txt: 'Sélectionner les services vous aimeriez avoir ou si vous avez des question, les posez ici ou nous appeler',
	
	provy: 'Provy Réparation'
  });
  $translateProvider.translations('fr', {
    btn_lang_en: 'English',
    home: 'Page d\'accueil',
	services: 'Services',
	contact: 'Contact',
	close: 'Fermer',
	

	home_header: 'L’entreprise Provy Réparation souhaite et s’engage à satisfaire chaque client et de leur apporter une expérience inégalée. L’entreprise s’engage à réparer , à optimiser ou à installer des logiciels sur l’ordinateur du client de façons propres, organiser et sécuritaire. Nous voulons offrir un prix plus qu’abordable pour le client et de lui fournir un rapport complet avec recommandations et travaux accomplis par notre technicien.',
	home_para1: 'Un ordinateur est une machine électronique qui fonctionne par la lecture séquentielle d\'un ensemble d\'instructions, organisées en programmes, qui lui font exécuter des opérations logiques et arithmétiques sur des chiffres binaires.',
	home_para2: 'Le premier "ordinateur" est apparu dans les environs de 1834 à 1837 et conçus par Charles Baddage. L\'ordinateur fonctionnait grâce à l\'aide d\'instructions sur des cartes perforées.',
	home_para3: 'Le premier "ordinateur personnel" est apparu dans les années 1960. Ce fut le tout début d\'une nouvelle ère pour le monde de l\'informatique et de l\'industrialisation.Le monde ne cesse de changer et d\'évoluer depuis que les ordinateurs personnels existent et c\'est ce qui vous amène aujourd\'hui sur notre site Internet.',
	home_para4: 'Une des principales raisons pour lesquelles vous êtes sur notre site, les "bugs". Votre ordinateur est lent en raison de bogues causés par sois des virus ou le manque d\'entretient de votre ordinateur. Mais pourquoi cela se nomme-t-il un "bug"? ',
	home_para5: 'En informatique, un "bug" (de l\'anglais bug. « insecte ») est un défaut de conception d\'un programme informatique causé par un insecte lors du développement du système Harvard Mark II3. L\'insecte se retrouvait dans les circuits électriques de l\'ordinateur géant.',
	home_para6: 'Les bogues se retrouvant dans les ordinateurs d\'aujourd’hui sont en grande cause du ralentissement de l\'ordinateur et peuvent être réglés grâce à un grand nettoyage de l\'ordinateur à l\'aide d\'outils spécial.',
	home_img_1: 'Nos services',
	home_img_1_1: 'En savoir plus sur ce que nous offrons',
	home_img_1_2: 'Services',
	home_img_2: 'Contactez-nous',
	home_img_2_1: 'Comment nous rejoindre',
	home_img_2_2: 'Contact',
	
	about_header: 'À propos de Provy Réparation',
	about_para1: 'Provy Réparation a été fondé en 2013 par Yannick Provencher. Celui-ci diplômé en programmation informatique détient l\'expérience nécessaire pour assurer un travail de qualité a tous les clients de Provy Réparation. L\'informatique lui a toujours été une passion depuis son enfance et s\'assure de transmettre son savoir a tous ses clients.',
	about_para2: 'Nous nous démarquons par notre dévouement à la satisfaction du client et a l’importance que nous apportons au travail de qualité. Nous ferons tout en notre pouvoir pour que le client n’hésite pas à recontacter Provy Réparation. La compétition ne nous inquiète aucunement puisque nous nous adaptons à tout changement afin de battre la concurrence',
	
	media_header: 'Résaux sociaux',
	media: 'Nous faisons des concours sur facebook alors assurez-vous de nous suivre!',
	
	services_header: 'Services offerts',
	services_para_1: 'Diagnostic matériel – Gratuit',
	services_para_1_1: 'Taux horraire du technicien – 30$',
	services_para_2: 'Augmentation de performance – 30$',
	services_para_3: 'Frais de déplacement – 40$',
	services_para_4: 'Installation diverse',
	services_para_4_1: 'Désinstallation et installation de logiciels - 10$ chaque',
	services_para_4_3: 'Installation de carte mère – 30$',
	services_para_4_4: 'Installation de carte vidéo, disque dur, mémoire vive (RAM), lecteur CD/DVD, boite d\'alimentation - 10$',
	services_para_4_5: 'Transfert de l\'ordinateur complet dans un autre boîtier – 50$',
	services_para_4_6: 'Installation de processeur (nettoyage, ajout de pâte thermique) – 20$',
	services_para_4_7: 'Formatage de disque dur – 10$',
	services_para_4_8: 'Partition sur disque dur – 10$',
	services_para_5: 'Nettoyage physique de l’ordinateur – 15 $ à 45$',
	services_para_6: ' Installation de Windows',
	services_para_6_1: 'Installation de Windows et drivers pour ordinateur de bureau – 35$',
	services_para_6_2: 'Installation de Windows et drivers pour portables – 40$',
	services_para_6_3: 'Mise à jour de Windows – 15$',
	services_para_6_4: 'Installation de pilote – 10$ par pilote',
	services_para_6_5: 'Transfert de données - sur CD 40$ / sur DVD 60$',
	services_para_6_6: 'Test de vérification pour tentative de récupération de données – 20$',
	services_para_7: 'Taux horaire à domicile ou entreprise – 40$',
	services_para_8: 'Général',
	service_prix: 'Les prix peuvent varier, il est recommendé de nous rejoindre',
	
	contact_header: 'Coordonnées',
	contact_1: 'Pour obtenir une estimation ou pour obtenir nos services, S.V.P. contactez nous au:',
	contact_2: '(819) 319-5494 ou par courriel ',
	contact_3: 'provyrepartion@gmail.com',
	contact_5: 'Si vous communiquez par courriel s\'il vous plaît fournir les informations suivantes :',
	contact_6: 'Nom complet',
	contact_7: 'Numéro de téléphone',
	contact_8: 'Ordinateur ou ordinateur portale',
	contact_9: 'Services voulu',
	contact_13: 'Sélectionnez les services que vous aimeriez avoir et ensuite copiez et collez dans votre message électronique.',
	contact_txt: 'Sélectionner les services vous aimeriez avoir ou si vous avez des question, les posez ici ou nous appeler',
	
	provy: 'Provy Réparation'
	
  });
  $translateProvider.preferredLanguage('fr');
  $translateProvider.useSanitizeValueStrategy('escape');
});

// This is for the lang switch
app.controller('langController', function ($scope, $translate) {
  $scope.changeLanguage = function (lang) {
    $translate.use(lang);
  };
  
});

app.controller('langController', ['$translate', '$scope', function ($translate, $scope) {
    $scope.toggleLang = function () {
        $translate.use() === 'en'? $translate.use('fr') : $translate.use('en');
    };
}]);

	app.controller('mainController', function($scope) {
	});
	app.controller('contactController', function($scope) {
	});
	app.controller('servicesController', function($scope) {
	});