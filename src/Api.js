class ApiRequest {
  api() {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c `).then(
      (response) => {
        return response.json();
      }
    );
  }
}

export default ApiRequest;
