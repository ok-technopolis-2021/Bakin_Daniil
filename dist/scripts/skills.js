class Skill {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class SkillsModel {
    skills;

    constructor(skills) {
        this.skills = skills;
    }

    addSkill(name, value) {
        this.skills.push(new Skill(name, value));
    }

    deleteSkill(name) {
        this.skills.splice(this.skills.indexOf(name), 1);
    }
}

class SkillsView {
    skillsSection = document.querySelector('.skills-list');
    addForm = document.querySelector('#add-new-skill');

    getSkillName() {
        return document.querySelector("input[name=name]").value.trim()
    }

    getSkillValue() {
        return document.querySelector("input[name=value]").value.trim()
    }

}

class SkillsController {
    //could be set in constructor
    skillsModel = new SkillsModel([]);
    skillsView = new SkillsView;

    constructor() {
        this.createFormDependency();
        this.addNewSkillByValues("Eating pizza", "85");
        this.addNewSkillByValues("Do nothing", "76");
        this.addNewSkillByValues("Playing games", "42");
        this.addNewSkillByValues("Avoiding preparing for exams", "93");
    }

    createFormDependency() {
        this.skillsView.addForm.addEventListener("submit", (event) => {
            event.preventDefault();
            if (this.skillsModel.skills.length >= 7) {
                alert("Not enough space for this skill");
                return
            }
            this.addNewSkill();
            this.skillsView.addForm.reset();
        });
    }

    addNewSkill() {
        this.addNewSkillByValues(this.skillsView.getSkillName(), this.skillsView.getSkillValue());
    }

    addNewSkillByValues(name, value) {
        this.skillsModel.addSkill(name, value);
        this.redrawSkills();
    }

    redrawSkills() {
        let skills = this.skillsModel.skills;
        let view = this.skillsView.skillsSection;
        view.textContent = "";
        skills.forEach((skill) => {
            const newSkill = document.createElement("div");
            newSkill.innerHTML =
                `<div class="skill">
                    <div class="skill_description">
                        <p class="skill_name">${skill.name}</p>
                        <p class="skill_percentage">${skill.value}</p>
                    </div>
                    <div class="skill_content">
                        <div class="skill_bar">
                            <div class="skill_bar-value" style="width: ${skill.value}%;"></div>
                        </div>
                        <button class="skill-button">x</button>
                    </div>
                </div>`;
            view.appendChild(newSkill);


            let deleteButton = newSkill.querySelector("button");
            deleteButton.addEventListener("click", () => {
                this.skillsModel.deleteSkill(skill);
                this.redrawSkills();
            });
        });
    }
}

new SkillsController();
