import { portfolioData } from '../data/portfolioData';
import { ProfileModel } from '../models/PortfolioModels';

class PortfolioDAO {
    constructor() {
        // In a real scenario, this might initialize DB connection or load from LocalStorage
        this.data = new ProfileModel(portfolioData);
    }

    getProfile() {
        return this.data.personalInfo;
    }

    getSkills() {
        return this.data.skills;
    }

    getExperience() {
        return this.data.experience;
    }

    getProjects() {
        return this.data.projects;
    }

    getLanguages() {
        return this.data.languages;
    }

    // Example of future-proofing for LocalStorage
    saveProfile(updatedProfile) {
        // Logic to save to localStorage
        // localStorage.setItem('portfolioData', JSON.stringify(updatedProfile));
        console.log("Saved profile (simulated):", updatedProfile);
    }
}

export const portfolioDAO = new PortfolioDAO();
