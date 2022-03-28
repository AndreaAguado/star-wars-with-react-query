import { useQuery } from "react-query";

export const getPlanets = async (page) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();

}

export const getPeople = async (page) => {
    const res = await fetch(`http://swapi.dev/api/people/?page=${page}`);
    return res.json();

}

export const useQueryPlanets = (page) => useQuery(['planets', page], () => getPlanets(page), {
    onSuccess: () => console.log('planets data fetched correctly'), //Property receives arrow function as value
    onError: () => console.log('planets data could not be fetched'),//Propertyreceives arrow function as value
    keepPreviousData: true,
});

export const useQueryPeople = (page) => useQuery(['people', page], () => getPeople(page), {
    onSuccess: () => console.log('planets data fetched correctly'), //Property receives arrow function as value
    onError: () => console.log('planets data could not be fetched'),//Propertyreceives arrow function as value
    keepPreviousData: true,
});

