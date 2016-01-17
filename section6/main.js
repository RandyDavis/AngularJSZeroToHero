angular.module('codecraft', ['ngResource'])
		.controller('PersonListCtrl', PersonListCtrl)
		.controller('PersonDetailCtrl', PersonDetailCtrl)
		.service('ContactService', ContactService)
		.config(function ($httpProvider, $resourceProvider) {
			$httpProvider.defaults.headers.common['Authorization'] = 'Token 71ca1541c6e7c87837bfa7d6aeb9ede13096ec83';
			$resourceProvider.defaults.stripTrailingSlashes = false;
		})
		.factory("Contact", Contact)

function Contact ($resource) {
	return $resource("https://codecraftpro.com/api/samples/v1/contact/:id/");
}

function PersonDetailCtrl ($scope, ContactService) {
	$scope.contacts = ContactService;
}

function PersonListCtrl ($scope, ContactService) {
	$scope.search = "";
	$scope.order = "email";
	$scope.contacts = ContactService;

	$scope.sensitiveSearch = function (person) {
		if ($scope.search) {
			return person.name.indexOf($scope.search) == 0 || person.email.indexOf($scope.search) == 0;
		}
		return true;
	}

}

function ContactService (Contact) {
	var self =  {
		addPerson: function (person) {
			this.persons.push(person)
		},
		'page': 1,
		'hasMore': true,
		'isLoading': false,
		selectedPerson: null,
		persons: [],
		'loadContacts': function () {
			Contact.get(function (data) {
				console.log(data);
				angular.forEach(data.results, function (person) {
					self.persons.push(new Contact(person));
				})
			});
		}
	};

	self.loadContacts();

	return self;
}

