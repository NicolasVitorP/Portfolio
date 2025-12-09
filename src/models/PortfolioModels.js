export class ProjectModel {
    constructor(title, description, technologies, repoLink, featured = false) {
        this.title = title;
        this.description = description;
        this.technologies = technologies;
        this.repoLink = repoLink;
        this.featured = featured;
    }
}

export class SkillModel {
    constructor(name, iconId, color) {
        this.name = name;
        this.iconId = iconId;
        this.color = color;
    }
}

export class ProfileModel {
    constructor(data) {
        this.personalInfo = data.personalInfo;
        this.skills = data.skills;
        this.experience = data.experience;
        this.projects = data.projects.map(p => new ProjectModel(p.title, p.description, p.technologies, p.repoLink, p.featured));
        this.languages = data.languages;
    }
}
