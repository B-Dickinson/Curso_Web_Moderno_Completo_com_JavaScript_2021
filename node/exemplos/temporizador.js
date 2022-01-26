const schedule = require('node-schedule');

const tarefa1 = schedule.scheduleJob('*/5 * 10  * * 3', () => {
    console.log('Executando tarefa1: ',new Date().getSeconds());
});

const rule = new schedule.RecurrenceRule();

rule.dayOfWeek = [new schedule.Range(1,5)];
rule.hour = 11;
rule.second = 1;

const tarefa2 = schedule.scheduleJob(rule, () => {
    console.log('Regra 2: ', new Date().getHours(),':',new Date().getSeconds())
});