import customerJson from '../customer.json'

const customerQuery = async () => {
    const response = await fetch("http://localhost:5000/customer_profile");
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

export default customerQuery;
