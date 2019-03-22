class Excursion {

    region;
    title;
    duration;
    description;
    starting_point;
    price_adult;
    price_child;
    operator_id;


    /// lists
    services; /// list of strings (codes)
    images; /// list of URLs
    schedule; /// list of something, not sure yet


    constructor(region, title, duration, description, starting_point,
                price_adult, price_child, operator_id, services, images, schedule) {
        this.region = region;
        this.title = title;
        this.images = images;
        this.schedule = schedule;
        this.duration = duration;
        this.services = services;
        this.description = description;
        this.starting_point = starting_point;
        this.price_adult = price_adult;
        this.price_child = price_child;
        this.operator_id = operator_id;
    }
}


export default Excursion;