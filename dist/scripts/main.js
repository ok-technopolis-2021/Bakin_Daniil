(function () {
    'use strict';

    var checkbox = document.getElementById('slider');

    checkbox.onclick = function () {
        transition();
        if (this.checked) {
            document.documentElement.setAttribute('theme', 'dark');
        } else {
            document.documentElement.setAttribute('theme', 'light');
        }
    };

    function transition() {
        document.documentElement.classList.add('transition');
        setTimeout(function () {
            document.documentElement.classList.remove('transition');
        }, 250);
    }

    class SkillsController {

        constructor(model, view) {
            this.skillsModel = model;
            this.skillsView = view;
            this.createFormDependency();
        }

        createFormDependency() {
            this.skillsView.addForm.addEventListener("submit", (event) => {
                event.preventDefault();
                if (this.skillsModel.skills.length >= 7) {
                    alert("Not enough space for this skill");
                    return;
                }
                this.addNewSkill();
                this.skillsView.addForm.reset();
            });
        }

        addNewSkill() {
            this.addNewSkillByValues(this.skillsView.getSkillName(), this.skillsView.getSkillValue());
        }

        addNewSkillByValues(name, value) {
            const skill = this.skillsModel.addSkill(name, value);
            this.skillsView.drawNewSkill(name, value, skill.id);

            let deleteButton = this.skillsView.skillsSection
                                   .querySelector(".skill_" + skill.id)
                                   .querySelector("button");

            deleteButton.addEventListener("click", () => {
                this.deleteSkill(skill);
            });
        }

        deleteSkill(skill) {
            this.skillsView.cutAwaySkillById(skill.id);
            this.skillsModel.deleteSkill(skill);
        }

        updateAllSkills() {
            //При желании можно еще написать обновление всех скиллов, если это надо
            //Как я делал ранее при добавлении или удалении
        }

    }

    class Skill {
        constructor(name, value, id) {
            this.name = name;
            this.value = value;
            this.id = id;
        }
    }

    class SkillsModel {

        constructor(skills) {
            this.skills = skills;
            this.counter = 0;
        }

        addSkill(name, value) {
            const skill = new Skill(name, value, this.counter++);
            this.skills.push(skill);
            return skill;
        }

        deleteSkill(skill) {
            this.skills.splice(this.skills.indexOf(skill), 1);
        }

    }

    class SkillsView {
        skillsSection = document.querySelector('.skills-list');
        addForm = document.querySelector('#add-new-skill');

        getSkillName() {
            return document.querySelector("input[name=name]").value.trim();
        }

        getSkillValue() {
            return document.querySelector("input[name=value]").value.trim();
        }

        drawNewSkill(name, value, id) {
            const newSkill = document.createElement("div");
            newSkill.className = "skill skill_" + id;

            let description = document.createElement("div");
            description.className = "skill_description";
            let pName = document.createElement("p");
            pName.className = "skill_name";
            pName.textContent = name;
            let pValue = document.createElement("p");
            pValue.className = "skill_percentage";
            pValue.textContent = value;
            description.appendChild(pName);
            description.appendChild(pValue);

            newSkill.appendChild(description);

            let content = document.createElement("div");
            content.className = "skill_content";
            let bar = document.createElement("div");
            bar.className = "skill_bar";
            let barValue = document.createElement("div");
            barValue.className = "skill_bar-value";
            barValue.style.width = value + "%";
            bar.appendChild(barValue);
            content.appendChild(bar);
            let button = document.createElement("button");
            button.className = "skill-button";
            button.textContent = "x";
            content.appendChild(button);

            newSkill.appendChild(content);

            this.skillsSection.appendChild(newSkill);
        }

        cutAwaySkillById(id) {
            const removeSkill = this.skillsSection.querySelector(".skill_" + id);
            removeSkill.remove();
        }

    }

    const controller = new SkillsController(new SkillsModel([]), new SkillsView());
    //add skills from bd
    controller.addNewSkillByValues("Eating pizza", "85");
    controller.addNewSkillByValues("Do nothing", "76");
    controller.addNewSkillByValues("Playing games", "42");
    controller.addNewSkillByValues("Avoiding preparing for exams", "93");

})();
