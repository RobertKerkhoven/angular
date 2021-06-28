import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
  // @ts-ignore
  @Input() task: Task;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter<Task>();

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter<Task>();
  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onDelete(task: Task) { this.onDeleteTask.emit(task);
  }

  // tslint:disable-next-line:typedef
  onToggle(task: Task) { this.onToggleReminder.emit(task);
  }

}
